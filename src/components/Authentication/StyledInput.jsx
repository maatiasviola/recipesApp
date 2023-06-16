import { TextInput,View,Text,Image } from "react-native"
import { COLORS, FONTS, SIZES } from "../../constants"
import styled from "styled-components/native";
import { css } from "styled-components";

const StyledInput = ({
  containerStyle,
  inputContainerStyle,
  placeholder,
  inputStyle,
  estado="",
  cambiarEstado,
  icon,
  funcion,
  appendComponent,
  expresionRegular,
  onPress,
  leyendaError,
  editable,
  secureTextEntry,
  keyboardType,
  autoCompleteType="off",
  autoCapitalize="none",
  maxLength,
  placeholderTextColor=COLORS.gray60
}) =>{
  const onChange = (e) => {
		cambiarEstado({...estado, campo: e.target.value});
	}

  const validacion = () => {
		if(expresionRegular){
			if(expresionRegular.test(estado.campo)){
				cambiarEstado({...estado, valido: 'true'});
			} else {
				cambiarEstado({...estado, valido: 'false'});
			}
		}
    
    if(funcion){
			funcion();
		}
	}
  return(
    <View style={{...containerStyle}}>
      <StyledView
        style={{
          backgroundColor:COLORS.lightGray,
          flexDirection:'row',
          height:55,
          paddingHorizontal:SIZES.radius,
          borderRadius:SIZES.radius,
          alignItems:'center',
          marginTop:SIZES.radius,
          ...inputContainerStyle
        }}
        valido={estado.valido}
      >
        {icon &&
          <StyledIconImage
            valido={estado.valido}
            source={icon}
            style={{
              width:25,
              height:25,
              marginRight:SIZES.base
            }}
          />
        }
        <TextInput
          style={{
            flex:1,
            paddingVertical:0,
            borderWidth:0,
            ...FONTS.body3,
            ...inputStyle
          }}
          value={estado.campo}
					onChange={onChange}
					onKeyUp={validacion}
					onBlur={validacion}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          onPressIn={onPress}
          editable={editable}
        />

        {appendComponent}
      </StyledView>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </View>
  )
}


const StyledView = styled(View)`
  ${props => props.valido === 'true' && css`
		border: 3px solid transparent;
	`}

	${props => props.valido === 'false' && css`
		border: 3px solid #bb2929 !important;
	`}

`

const StyledIconImage = styled(Image)`

	${props => props.valido === 'false' && css`
		tint-color: #bb2929 !important;
	`}
`

const LeyendaError = styled(Text)`
	font-size: 12px;
	margin-bottom: 0;
	color: #bb2929;
	display: none;

	${props => props.valido === 'true' && css`
		display: none;
	`}

	${props => props.valido === 'false' && css`
		display: block;
	`}
`;

export default StyledInput

