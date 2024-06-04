import {Button, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { styles } from './style.js';
import { useState } from 'react';

function App() {

  const[cep, setCep] = useState("");
  const [resultado, SetResultado] = useState("");

  async function ConsultarCep(){
    const req = await fetch("https://viacep.com.br/ws/" + cep +"/json/");

    const retorno = await req.json();
    
    SetResultado( "\n" + "Endereço:" + retorno.logradouro + "\n" +
                  "Cidade:" + retorno.localidade + "\n" + 
                  "UF:" + retorno.uf);
    
  }

return <SafeAreaView style={styles.conteiner}>
  <StatusBar barStyle="dark-content"/>
  <Text style={styles.titulo}> Consulta CEP</Text>


  <View style={styles.form}>
    <TextInput placeholder="Digite o cep..."
                style={styles.TextInput}
                onChangeText={texto => setCep(texto)}/>
  

  <TouchableOpacity style={styles.btn} onPress={ConsultarCep}>
    <Text style={styles.btnText}>Consultar</Text>
  </TouchableOpacity>
  </View>  

  <View style={styles.form}>
    <Text style={styles.resultado}> {resultado} </Text>
  </View>
</SafeAreaView>
}
export default App;