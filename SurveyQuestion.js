// src/SurveyQuestion.js
import React, { Component } from 'react';
class SurveyQuestion extends Component {
constructor(props) {
super(props);
this.state = {
answer: '',
};
}
handleAnswerChange = (e) => {
const answer = e.target.value;
this.setState({ answer });
this.props.onRespond(this.props.id, answer);
};
render() {
const { question } = this.props;
return (
<div className="SurveyQuestion">
<h3>{question}</h3>
<input
type="text"
placeholder="Your Answer"
value={this.state.answer}
onChange={this.handleAnswerChange}
/>
</div>
);
}
}
export default SurveyQuestion;
