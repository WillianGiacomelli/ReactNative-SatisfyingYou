const types = {
  email:{
    regex:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: "Preencha um email válido"
  },
  password:{
    regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message: " A senha precisa ter 1 caracter maiúsculo, 1 minúsculo e 1 dígito. Com no mínimo 8 caracteres."
  }
}

export function validateEmail(email, setMensagem){
  if(types.email.regex.test(email)){
    return true;
  }else{
    setMensagem(types.email.message)
  }
}


export default types;