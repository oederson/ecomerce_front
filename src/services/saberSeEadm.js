import jwt_decode from 'jwt-decode';


export function saberSeEadm(token, oQueQuerDoUsuario) {
   try {
    const decodedToken = jwt_decode(token.token, '123456789'); // chave secreta nao pode fica aqui :)
    const item = decodedToken[oQueQuerDoUsuario];
    return item;
  } catch (error) {
        return null;
  }
}


