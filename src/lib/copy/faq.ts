export type QuestionAnswer = {
  question: string;
  answer: string;
};

const faqCopy: QuestionAnswer[] = [
  {
    question: 'When should I arrive?',
    answer: 'Please arrive 15-20 minutes early.',
  },
  {
    question: 'What should I wear?',
    answer:
      'The wedding is black-tie optional. The ceremony will take place outside, please bring a light sweater. The rest of the evening will take place indoors.',
  },
  {
    question: 'Can I bring my children?',
    answer:
      'Only those who received an invitation and their spouses should attend the wedding. Thanks for understanding!',
  },
  {
    question: 'Where can I park?',
    answer:
      "Once you’ve arrived at the venue, you’ll meet an attendant who will check you in. Let them know that you’re a guest of the Woods/Ham wedding and you'll receive a parking pass.",
  },
  {
    question: 'Can I take pictures during the ceremony?',
    answer:
      'Please keep your phones and cameras off during the ceremony. We’ll have plenty of photos to share with you after the wedding!',
  },
  {
    question: 'Will we accommodate dietary restrictions?',
    answer:
      'Yes! The chef will be preparing a variety of options to meet everyone’s dietary needs. ',
  },
];

export { faqCopy };
