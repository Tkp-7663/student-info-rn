import { View, StyleSheet } from "react-native";
import { Avatar, List, Card, Divider } from "react-native-paper";
import { student } from "../data/mock";

const MainPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <List.Item
                    title={`${student.firstName} ${student.lastName}`}
                    left={() => (
                        <Avatar.Image
                            size={60}
                            source={{ uri: student.imageUrl }}
                        />
                    )}
                />
            </Card>

            <Card style={styles.card}>
                <List.Item
                    title="ชื่อ"
                    description={student.firstName}
                    left={() => (
                        <List.Icon icon="badge-account-horizontal-outline" />
                    )}
                />
                <Divider />
                <List.Item
                    title="นามสกุล"
                    description={student.lastName}
                    left={() => <List.Icon icon="account-circle-outline" />}
                />
                <Divider />
                <List.Item
                    title="รหัสนักศึกษา"
                    description={student.studentId}
                    left={() => (
                        <List.Icon icon="ticket-confirmation-outline" />
                    )}
                />
                <Divider />
                <List.Item
                    title="สาขา"
                    description={student.major}
                    left={() => <List.Icon icon="school-outline" />}
                />
                <Divider />
                <List.Item
                    title="สำนักวิชา"
                    description={student.school}
                    left={() => <List.Icon icon="domain" />}
                />
            </Card>

            <Card style={styles.card}>
                <List.Item
                    title="รายวิชาที่ลงทะเบียน"
                    description="แตะเพื่อดูรายละเอียด"
                    left={() => <List.Icon icon="book-open-variant" />}
                    right={() => <List.Icon icon="chevron-right" />}
                    onPress={() => navigation.navigate("Registration")}
                />
            </Card>
        </View>
    );
};

export default MainPage;

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
