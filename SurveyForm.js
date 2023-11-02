// src/SurveyForm.js
import React, { Component } from 'react';
import SurveyQuestion from './SurveyQuestion';
class SurveyForm extends Component {
constructor(props) {
super(props);
this.state = {
responses: {},
};
}
handleResponse = (questionId, answer) => {
this.setState({
responses: {
...this.state.responses,
[questionId]: answer,
},
});
};
render() {
const questions = [
{
id: 1,
question: 'What is your name?',
},
{
id: 2,
question: 'How satisfied are you with our service?',
},
// Add more questions here
];
return (
<div className="SurveyForm">
{questions.map((question) => (
<SurveyQuestion
key={question.id}
id={question.id}
question={question.question}
onRespond={this.handleResponse}
/>
))}
<h2>Survey Responses:</h2>
<pre>{JSON.stringify(this.state.responses, null, 2)}</pre>
</div>
);
}
}
export default SurveyForm;