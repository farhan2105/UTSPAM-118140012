import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

const Detail = () => {
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const API = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await fetch(API);
                const details = await response.json();
                setDetails(details);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        getDetails();
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ paddingHorizontal: 24, marginBottom: 16 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24, marginVertical: 24, textAlign: 'center' }}>Students Fetched From API</Text>
                    {!isLoading ? (
                        details.map((detail) => (
                            <View style={{ marginBottom: 16 }}>
                                <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>{detail.name}</Text>
                                <Text>{detail.email}</Text>
                            </View>
                        ))
                    ) : (
                        <Text>Loading...</Text>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Detail;
