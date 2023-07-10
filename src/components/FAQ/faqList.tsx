import { faqCopy } from '@/lib/copy';
import { Typography } from '@mui/material';
import React from 'react';
import Col from '@/components/Common/Col';

const FaqList: React.FC<{}> = () => (
  <Col gap={6}>
    {faqCopy.map(({ question, answer }, index) => (
      <Col
        width="100%"
        textAlign="center"
        alignItems="center"
        justifyContent="flex-start"
        key={`faq-${index}`}
      >
        <Typography fontWeight="bold" variant="body1">
          {question}
        </Typography>
        <Typography>{answer}</Typography>
      </Col>
    ))}
  </Col>
);

export default FaqList;
