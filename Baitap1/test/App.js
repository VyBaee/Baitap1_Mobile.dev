import React from 'react';
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native';

const initialData = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    timestamp: '20/08/2020, 06:00',
    type: 'check'
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    timestamp: '20/08/2020, 06:00',
    type: 'user'
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    timestamp: '20/08/2020, 06:00',
    type: 'user'
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    timestamp: '20/08/2020, 06:00',
    type: 'user'
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    timestamp: '20/08/2020, 06:00',
    type: 'check'
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    timestamp: '20/08/2020, 06:00',
    type: 'check'
  }
];



const App = () => {
  const renderItem = ({ item }) => (
  <View style={styles.item}>
    <View style={styles.iconContainer}>
      {item.type === 'check' ? (
        <Text style={styles.icon}>✔️</Text>
      ) : (
        <Text style={styles.icon}>👥</Text>
      )}
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  </View>
);


  const keyExtractor = (item) => item.id;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={initialData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    fontSize: 18,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  timestamp: {
    marginTop: 8,
    fontSize: 12,
    color: '#aaa',
  },
});


export default App;
