import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import TodoList from '../../components/TodoList';
import TodoInsert from '../../components/TodoInsert';
import TodoListItem from '../../components/TodoListItem';
import uuid from 'react-uuid';

const ExpenseItemSetting = () => {

    const navigation = useNavigation()
    const [Todos, setTodos] = useState([])

    const addTodo = text => {
      setTodos([...Todos,
        {id: uuid(), textValue: text, checked: false}, // check true면 완료
      ]);
    };
  
    const onRemove = id => e => {
      setTodos(Todos.filter(Todo => Todo.id !== id));
    };
  
    const onToggle = id => e => {
      setTodos(
        Todos.map(Todo =>
          Todo.id === id ? {...Todo, checked: !Todo.checked} : Todo,
        ),
      );
    };

    return (
      <View style={styles.container}>
        <View style={{paddingTop:20}}>
          <Text style={{fontSize:20}}>지출 분류</Text>
        </View>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <TodoInsert onAddTodo={addTodo} />
          <TodoList Todos={Todos} onRemove={onRemove} onToggle={onToggle} />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default ExpenseItemSetting;