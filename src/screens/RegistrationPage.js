import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { List, Card } from "react-native-paper";
import { student } from "../data/mock";

const RegistrationPage = () => {
    const [expanded, setExpanded] = useState(
        student.registrations.map((_, idx) => idx)
    );

    const handlePress = (index) => {
        if (expanded.includes(index)) {
            setExpanded(expanded.filter((i) => i !== index));
        } else {
            setExpanded([...expanded, index]);
        }
    };

    return (
        <View style={styles.container}>
            {student.registrations.map((reg, idx) => (
                <Card key={idx} style={styles.card}>
                    <List.Accordion
                        title={`ภาคการศึกษา: ${reg.term}`}
                        description={`จำนวนวิชา: ${reg.courses.length}`}
                        left={() => <List.Icon icon="calendar-month-outline" />}
                        expanded={expanded.includes(idx)}
                        onPress={() => handlePress(idx)}
                    >
                        {reg.courses.map((c, i) => (
                            <List.Item
                                key={i}
                                title={`${c.code} - ${c.name}`}
                                left={() => <List.Icon icon="book-outline" />}
                            />
                        ))}
                    </List.Accordion>
                </Card>
            ))}
        </View>
    );
};

export default RegistrationPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f9f9f9"
    },
    card: {
        marginVertical: 8,
        paddingHorizontal: 16
    }
});
