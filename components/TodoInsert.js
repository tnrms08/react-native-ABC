// 텍스트 입력창 & 추가 버튼
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, TouchableOpacity, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TodoInsert = ({onAddTodo}) => {
    const [NewTodoItem, setNewTodoItem] = useState('');
    const todoInputHandler = newTodo => {
        setNewTodoItem(newTodo);
    };
    const addTodoHandler = () => {
        onAddTodo(NewTodoItem);
        setNewTodoItem('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                placeholder="항목추가"
                placeholderTextColor={'gray'}
                onChangeText={todoInputHandler}
                value={NewTodoItem}
                autoCorrect={false}
            />
            <TouchableOpacity onPress={addTodoHandler}>
                <Ionicons name="add-circle" size={35} color="#e9664e" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: "65%",
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        fontSize: 15,
        marginRight: 20,
    },
});

export default TodoInsert;