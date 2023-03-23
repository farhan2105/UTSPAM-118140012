import { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent } from '../redux/reducer';
import PrimaryButton from './../components/PrimaryButton';

const Home = ({ navigation }) => {
    const [student, setStudent] = useState({ name: '' });
    const students = useSelector((state) => state.students);
    const dispatch = useDispatch();

    const addStudentToStore = (student) => {
        dispatch(addStudent(student));
        setStudent({ name: '' });
    };

    return (
        <View style={{ padding: 24 }}>
            <View style={{ marginBottom: 24 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>Navigations</Text>
                <PrimaryButton onPress={() => navigation.navigate('Detail')}>Detail Item</PrimaryButton>
            </View>
            <View style={{ marginBottom: 24 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>Students</Text>
                {students.map((student) => (
                    <Text>{student.name}</Text>
                ))}
            </View>
            <View>
                <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>New Student</Text>
                <TextInput style={{ borderWidth: 1, width: 200, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8 }} onChangeText={(value) => setStudent({ ...student, name: value })} value={student.name} />
                <Button title="Submit" onPress={() => addStudentToStore(student)} />
            </View>
        </View>
    );
};

export default Home;
