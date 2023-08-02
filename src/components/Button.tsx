import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

//Criando propriedades para o componente Button.
interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) { //Button vai receber um objeto do tipo ButtonProps que é uma string.
    return (
        //Quando precionado, muda a opacidade.
        //Botão transformado em componet.
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            {...rest}//Selecionando todo o resto das propriedades.
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.text
    }
});