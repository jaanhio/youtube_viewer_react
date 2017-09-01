import React from 'react';
import {Icon, Container} from 'semantic-ui-react';

const Footer = () => {
  return(
    <Container textAlign='center' className="footer">
      <h5>Built with <a target="_blank" href="https://facebook.github.io/react/">React</a> and <a target="_blank" href="https://developers.google.com/youtube/v3/">YouTube Data API</a></h5>
      <h5>Copyright &copy; <a target="_blank" href="https://github.com/jaanhio">jaanhio</a> 2017</h5>
    </Container>
  )
}

export default Footer;
