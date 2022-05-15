// 추가된 아이템 하나를 나타내는 부분, 완료 여부 상태값, 체크 이벤트
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onToggle(id)}>
                {checked ? (
                    <View style={{marginRight: 11}}>
                        <Ionicons name="checkmark-circle-outline" size={24} color="#e9664e" />
                    </View>
                ) : (
                    <View style={{marginRight:11}}>
                        <Ionicons name="ellipse-outline" size={24} color="#e9664e" />
                    </View>
                )}
            </TouchableOpacity>
            <Text style={[styles.text]}>
                {textValue}
            </Text>
            <TouchableOpacity style={styles.buttonContainer}>
                    <Ionicons onPress={onRemove(id)} name="trash-outline" size={24} color="#e9664e" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width -60,
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 17,
        marginVertical: 15,
        width: 100,
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

export default TodoListItem;