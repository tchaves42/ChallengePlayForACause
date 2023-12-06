import { PrettyChatWindow } from "react-chat-engine-pretty";
import PropTypes from 'prop-types';

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

// Validando os tipos das propriedades recebidas
ChatsPage.propTypes = {
  // A propriedade 'User' deve ser um objeto com as prioridades 'username' e 'secret'
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatsPage;