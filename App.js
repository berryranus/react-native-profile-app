import { StyleSheet, View, ScrollView, Text } from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard'; 

const adaImage = require('./assets/ada.png');
const graceImage = require('./assets/grace.png');
const hedyImage = require('./assets/hedy.png');
const katherineImage = require('./assets/katherine.png');
const alanImage = require('./assets/alan.png');

export default function App() {
  return (
    <SafeAreaView 
      style={styles.container}
      edges={['top', 'left', 'right']}
    >
      
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Profile Cards</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <ProfileCard 
          name="Ada Lovelace" 
          role="Mathematician" 
          imageSource={adaImage} 
        />
        <ProfileCard 
          name="Grace Hopper" 
          role="Computer Scientist" 
          imageSource={graceImage} 
        /> 
        {/* FAZLADAN '}' BURADAYDI, SİLDİM */}
        <ProfileCard 
          name="Hedy Lamarr" 
          role="Inventor" 
          imageSource={hedyImage} 
        />
        <ProfileCard 
          name="Katherine Johnson" 
          role="NASA Physicist" 
          imageSource={katherineImage} 
        />
        <ProfileCard 
          name="Alan Turing" 
          role="Codebreaker" 
          imageSource={alanImage} 
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f0f2f5',
  },
  headerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  scrollView: {
    flex: 1, 
  },
  scrollViewContent: {
    padding: 20,
    flexGrow: 1, 
  }
});