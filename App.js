import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Card from './Card';

export default function App() {
  const [items, setItems] = useState([
    { id: 1, data: 'A', isVisible: false, status: '' },
    { id: 2, data: 'B', isVisible: false, status: '' },
    { id: 3, data: 'C', isVisible: false, status: '' },
    { id: 4, data: 'D', isVisible: false, status: '' },
    { id: 5, data: 'E', isVisible: false, status: '' },
    { id: 6, data: 'F', isVisible: false, status: '' },
    { id: 7, data: 'G', isVisible: false, status: '' },
    { id: 8, data: 'H', isVisible: false, status: '' },
    { id: 1, data: 'A', isVisible: false, status: '' },
    { id: 2, data: 'B', isVisible: false, status: '' },
    { id: 3, data: 'C', isVisible: false, status: '' },
    { id: 4, data: 'D', isVisible: false, status: '' },
    { id: 5, data: 'E', isVisible: false, status: '' },
    { id: 6, data: 'F', isVisible: false, status: '' },
    { id: 7, data: 'G', isVisible: false, status: '' },
    { id: 8, data: 'H', isVisible: false, status: '' },
  ].sort(() => Math.random() - 0.2));

  const [prev, setPrev] = useState(-1);
  const [attemptsCount, setAttemptsCount] = useState(0);
  const [matchesCount, setMatchesCount] = useState(0);

  function match(current) {
    if (items[current].id === items[prev].id) {
      items[current].status = 'correct';
      items[prev].status = 'correct';
      setMatchesCount(matches => matches + 1);
    } else {
      items[current].status = 'wrong';
      items[prev].status = 'wrong';
      setTimeout(() => {
        items[current].status = '';
        items[prev].status = '';
        setItems([...items]);
      }, 1000);
    }
    setAttemptsCount(attempts => attempts + 1);
    setPrev(-1);
  }

  function handleStatus(id) {
    if (prev === -1) {
      setItems([...items]);
      setPrev(id);
    } else {
      match(id);
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        numColumns={4}
        renderItem={({ item, index }) => <Card item={item} id={index} handleStatus={handleStatus} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Attempts: {attemptsCount}</Text>
        <Text style={styles.statsText}>Matches: {matchesCount}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statsText: {
    color: '#fff',
    fontSize: 18,
  },
});
