```
const Feedbacks = [
  {
    id: { value: 1, validation: [{ name: 'isRequired' }] },
    phone: {
      value: '213123123',
      validation: [{ name: 'minLength', values: [10] }]
    }
  }
];
```

# Feedback

- text
- description
- createdBy
- createdDate
- category
- point
- status

# FeedbackTag

- feedback
- tag

# Tag

- text

# Category

- text

# User

- userName
- email

# Role

- text

# RoleDetail

- role
- action
- resource
- isAllowed

# UserProfile

- name

# Log

- level
- text
- description
- date
