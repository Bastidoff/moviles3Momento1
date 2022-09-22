import { View, Text, TextInput, TouchableOpacity } from "react-native-web";
import {useState, useRef} from 'react';

export default function Body(){
    const[identificacion, setIdentificacion] = useState("");
    const[nombres, setNombres] = useState("");
    const[asignatura, setAsignatura] = useState("");
    const[nota1, setNota1] = useState("");
    const[nota2, setNota2] = useState("");
    const[nota3, setNota3] = useState("");
    const[definitiva, setDefinitiva] = useState("");
    const[observacion, setObservacion] = useState("");
    const[notas, setNotas] = useState([]);
    let refIdentificacion = useRef();

    let calcular = () =>{
        if(identificacion=="" || nombres=="" || asignatura=="" || nota1=="" || nota2=="" || nota3==""){
            alert("Todos los campos son obligatorios");
        }
        else{
            let resultado = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
            let def = "";

            if(resultado>=3){
                def="Aprueba";
            }
            else{
                if(resultado>=2){
                    def="Habilita"
                }
                else{
                    def="Reprueba"
                }
            }
            if(nota1>5 || nota2>5 || nota3>5){
                alert("Las notas deben ser entre 0 y 5");
                resultado=0;
            }else{
                setDefinitiva(resultado);
                setObservacion(def);
                setNotas(misnotas => [...misnotas,{identificacion:identificacion,nombres:nombres,asignatura:asignatura,nota1:nota1,nota2:nota2,nota3:nota3,definitiva:resultado,observacion:def}]);
            }
        }    
        
        
        
   
    }


    let guardar = () =>{
        setNotas(misnotas => [...misnotas,{identificacion:identificacion,nombres:nombres,asignatura:asignatura,nota1:nota1,nota2:nota2,nota3:nota3,definitiva:definitiva,observacion:observacion}]);
    }


    let buscar = (idbuscar) =>{
        let idencontrado = notas.find(nota => nota.identificacion == identificacion);
        if (idencontrado != undefined){
          setAsignatura(idencontrado.asignatura);
          setDefinitiva(idencontrado.definitiva);
          setNombres(idencontrado.nombres);
          setNota1(idencontrado.nota1);
          setNota2(idencontrado.nota2);
          setNota3(idencontrado.nota3);
          setObservacion(idencontrado.observacion);
        }
        else{
          alert("Identificación no encontrada");
        }
      }




    let limpiar=()=>{
        setIdentificacion("");
        setNombres("");
        setAsignatura("");
        setDefinitiva("");
        setNota1("");
        setNota2("");
        setNota3("");
        setObservacion("");
    }

    return(
        <View  style={{height:'70%', width:'95%', marginTop:10, flexDirection:'row'}}>
            <View>
                <Text style={{padding:10}}>Identificación</Text>
                <Text style={{padding:10}}>Nombres</Text>
                <Text style={{padding:10}}>Asignatura</Text>
                <Text style={{padding:10}}>Nota Momento 1 (30%)</Text>
                <Text style={{padding:10}}>Nota Momento 2 (35%)</Text>
                <Text style={{padding:10}}>Nota Momento 3 (35%)</Text>
                <Text style={{padding:10}}>Definitiva</Text>
                <Text style={{padding:10}}>Observación</Text>

                <TouchableOpacity 
                    style={{backgroundColor:'#548235',marginTop:5, width:'80%'}}>
                    <Text style={{color:'white', fontSize:12, fontWeight:'bold', padding:10}}
                    onPress={()=>calcular("/")}>Calcular/Guardar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{backgroundColor:'#548235',marginTop:5, width:'80%'}}>
                    <Text style={{color:'white', fontSize:12, fontWeight:'bold', padding:10}}
                    onPress={()=>limpiar("/")}>Limpiar</Text>
                </TouchableOpacity>

            </View>
            <View>
            <TextInput 
                style={{padding:7.5, borderBottomWidth:1}}
                onChangeText={identificacion => setIdentificacion(identificacion)}
                value={identificacion}/>
            <TextInput style={{padding:7.5, borderBottomWidth:1}}
                onChangeText={nombres => setNombres(nombres)}
                value={nombres}/>
            <TextInput style={{padding:7.5, borderBottomWidth:1}}
                onChangeText={asignatura => setAsignatura(asignatura)}
                value={asignatura}/>
            <TextInput style={{padding:10, borderBottomWidth:1}}
                onChangeText={nota1 => setNota1(nota1)}
                value={nota1}/>
            <TextInput style={{padding:10, borderBottomWidth:1}}
                onChangeText={nota2 => setNota2(nota2)}
                value={nota2}/>
            <TextInput style={{padding:10, borderBottomWidth:1}}
                onChangeText={nota3 => setNota3(nota3)}
                value={nota3}/>
            <TextInput editable={false} style={{padding:8, borderBottomWidth:1}}
                onChangeText={definitiva => setDefinitiva(definitiva)}
                value={definitiva}/>
            <TextInput editable={false} style={{padding:8, borderBottomWidth:1}}
                onChangeText={observacion => setObservacion(observacion)}
                value={observacion}/>  

            <TouchableOpacity 
                style={{backgroundColor:'#548235',marginTop:20, width:'80%'}}
                onPress={()=>buscar("/")}>
                <Text style={{color:'white', fontSize:12, fontWeight:'bold', padding:10}}>Buscar</Text>
            </TouchableOpacity>
        </View>
        <View>
        </View>
        
        </View>
    )
}