import React, {useState} from 'react'


export default function App() {
  const [valorTela, setValorTela]= useState ('')
  const [resultado, setResultado]= useState(0)
  const[acumulador, setAcumulador]= useState(0)
  const [operacao, setOperacao]= useState(false)
    // componentes
  const Tela=(valor,res)=>{
        return(
            <div style={cssTela}>
                <span style={cssTelaOper}>{valor}</span>
                <span style={cssTelaRes}>{res}</span>
            </div>
        )
    }
  const Btn=(label,onclick)=>{
      return(
        <button style={cssBtn} onClick={onclick}>{label}</button>
      )
    }

  // funçoes
  const addDigitoTela=(d)=> {
    if((d=='+' || d=='-'|| d=='*' ||d== '/') && operacao){
      console.log("+-*/")
      setOperacao(false)
      setValorTela(resultado+d)
      return
    }
    if(operacao){
    setValorTela(d)
    setOperacao(false)
    return
    }
    const valorDigitadoTela=valorTela+d
    setValorTela(valorDigitadoTela)
  }
  const limparMemoria=()=>{
    setOperacao(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }
  const Operacao=(oper)=>{
    if(oper=='bs'){
      let vtela=valorTela
      vtela=vtela.substring(0,(vtela.length -1))
      setValorTela(vtela)
      setOperacao(false)
      return
    }
    try{
      const r = eval(valorTela)  //calculo
      setAcumulador(r)
      setResultado(r)
      setOperacao(true)
    }catch{
      setResultado('ERRO')
    }
  }

 // estilo

  const cssConteiner={
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'column',
    width:300,
    border:'1px solid #000'
  }


  const cssBotoes={
    flexDirection:'row',
    flexWrap: 'wrap'

  }  


  const cssTela = {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#444',
    flexDirection: 'column',
    width:260
  };


  const cssTelaOper = {
    fontSize: 25,
    color: '#fff',
    height: 50
    
  };

  const cssTelaRes = {
    fontSize: 20,
    color: '#fff',
    height: 40,
  }

  const cssBtn={
    fontSize:20,
    height:75,
    width: 75,
    padding:20,
    backgroundColor:'#000',
    color:'#fff',
    borderColor: '#000',
    textAlign:'center',
    outline:'none'
  }
  
  return(
    <>
      <div style={cssConteiner}>
        <h3>Calculadora Matematica simples</h3>
        {Tela(valorTela,resultado)}
        <div style={cssBotoes}>
          {Btn('AC', limparMemoria)}
          {Btn('(',()=>addDigitoTela('('))}
          {Btn('(',()=>addDigitoTela('('))}
          {Btn('/',()=>addDigitoTela('/'))}
          {Btn('7',()=>addDigitoTela('7'))}
          {Btn('8',()=>addDigitoTela('8'))}
          {Btn('9',()=>addDigitoTela('9'))}
          {Btn('*',()=>addDigitoTela('*'))}
          {Btn('4',()=>addDigitoTela('4'))}
          {Btn('5',()=>addDigitoTela('5'))}
          {Btn('6',()=>addDigitoTela('6'))}
          {Btn('-',()=>addDigitoTela('-'))}
          {Btn('1',()=>addDigitoTela('1'))}
          {Btn('2',()=>addDigitoTela('2'))}
          {Btn('3',()=>addDigitoTela('3'))}
          {Btn('+',()=>addDigitoTela('+'))}
          {Btn('0',()=>addDigitoTela('0'))}
          {Btn('.',()=>addDigitoTela('.'))}
          {Btn('<-',()=>Operacao('bs'))}
          {Btn('=',()=>Operacao('='))}

        </div>
      </div>
    </>
  )

}
