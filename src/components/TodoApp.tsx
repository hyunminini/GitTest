import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  Text,
  Pressable,
} from 'react-native';
import useTodos from '../../hooks/useTodos';
import useTodoActions from '../../hooks/useTodosActions';

// 삭제와 등록 버튼으로 사용할 컴포넌트입니다.
function BlackButton({onPress, title}: {onPress(): void; title: string}) {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      android_ripple={{color: 'white'}}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}
// 할일 항목의 정보를 보여줍니다.
function TodoItem({id, text, done}: {id: number; text: string; done: boolean}) {
  const {toggle, remove} = useTodoActions();
  const onToggle = () => {
    // console.log(`토글 ${id}`);
    toggle(id);
  };
  const onRemove = () => {
    // console.log(`제거 ${id}`);
    remove(id);
  };

  return (
    <View style={styles.todo}>
      <Pressable onPress={onToggle} style={styles.toggle}>
        <Text style={done && styles.doneText}>{text}</Text>
      </Pressable>
      <BlackButton onPress={onRemove} title="삭제" />
    </View>
  );
}

function Todos() {
  //   const todos = [
  //     {id: 1, text: '리액트 네이티브 배우기', done: true},
  //     {id: 2, text: '상태 관리 배우기', done: false},
  //   ];
  const todos = useTodos();
  return (
    <FlatList
      style={styles.todos}
      data={todos}
      renderItem={({item}) => (
        <TodoItem id={item.id} done={item.done} text={item.text} />
      )}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() => <View style={styles.separator} />}
    />
  );
}

// 할일 항목을 등록하는 console.error('컴포넌트입니다',컴포넌트입니다!)
function TodoInput() {
  const [text, setText] = useState('');
  const {add} = useTodoActions();

  const onPress = () => {
    add(text);
    setText('');
  };

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="할 일을 입력하세요"
        value={text}
        onChangeText={setText}
      />
      <BlackButton onPress={onPress} title="등록" />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  inputWrapper: {
    borderColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  todos: {
    flex: 1,
  },
  todo: {
    flexDirection: 'row',
  },
  toggle: {
    justifyContent: 'center',
    flex: 1,
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
  },
});
// interface Profile {
//   id: number;
//   username: string;
//   displatName: string;
// }
// interface Relationship {
//   from: Profile;
//   to: Profile;
// }

// const relationship: Relationship = {
//   from: {
//     id: 1,
//     username: 'velopert',
//     displatName: 'HyunMin Kim',
//   },
//   to: {
//     id: 2,
//     username: 'johndoe',
//     displatName: 'John Doe',
//   },
// };
// console.log(relationship);

// interface Profile {
//   id: number;
//   username: string;
//   displayName: string;
// }

// interface Account extends Profile {
//   email: string;
//   password: string;
// }
// const account: Account = {
//   id: 1,
//   username: 'min',
//   displayName: 'display',
//   email: 'hyunmins@douzone.com',
//   password: '123123',
// };

// interface Pets {
//   dog: string;
//   cat: string;
//   age: number;
//   photoURL?: string;
// }

// const pets: Pets = {
//   dog: '뚱이',
//   cat: '폴리',
//   age: 7,
//   photoURL: undefined,
// };

// console.log(pets);


function TodoApp() {
  return (
    <SafeAreaView style={styles.block}>
      <Todos />
      <TodoInput />
    </SafeAreaView>
  );
}

export default TodoApp;
