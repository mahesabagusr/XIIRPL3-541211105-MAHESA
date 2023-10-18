import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

export default function projectDetail() {
  const progressStatus = [
    {
      name: 'javascript',
      progress: 0.95
    },
    {
      name: 'React Native',
      progress: 0.60
    },
    {
      name: 'Node.js',
      progress: 0.90
    },
    {
      name: 'UI/UX',
      progress: 0.95
    },
  ]

  const certificateStatus = [
    {
      name: 'Pemograman Javascript Dasar',
      publisher: 'Dicoding Indonesia',
      date: 'June 2023',
      image: require('../../assets/certification/certificate1.jpg'),
    },
    {
      name: 'Cisco Networking Academy® Entrepreneurship',
      publisher: 'Cisco Netwroking Academy',
      date: 'March 2022',
      image: require('../../assets/certification/certificate2.jpg'),
    },
    {
      name: 'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
      publisher: 'Dicoding Indonesia',
      date: 'May 2023',
      image: require('../../assets/certification/certificate3.jpg'),
    },
    {
      name: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
      publisher: 'Dicoding Indonesia',
      date: 'Jul 2023',
      image: require('../../assets/certification/certificate4.jpg'),
    },
  ]

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.avatar} source={require('../../assets/profile/profil.png')} />

          <View style={styles.profileText}>
            <Text style={styles.heading1}>Mahesa bagus Raditya</Text>
            <Text style={styles.subheading3}>Backend Dev | Student at SMK Telkom Purwokerto</Text>
            <Text style={styles.subheading4}>I am Mahesa Bagus Raditya, and welcome to my Digital CV, Now I am a Student of SMK Telkom Purwokerto majoring in Software Engineering, I have several things that I am interested in, one of which is UI/UX and Programming, and my motto is I want to learn more and more about world of technology</Text>
          </View>

        </View>

        <View>
          <Text style={styles.heading3}>My Skills</Text>
          {
            progressStatus.map((item, index) => {
              return (
                <View style={styles.skillContainer}>
                  <View style={styles.skillProgress}>
                    <Text style={styles.subheading3}>{item.name}</Text>
                    <ProgressBar style={{ marginTop: 5, marginBottom: 5 }} progress={item.progress} width={335} height={15} color="#0257D4" borderWidth={2} />
                    <Text>Progress: {(item.progress * 100).toFixed(0)}%</Text>
                  </View>
                </View>
              )
            })
          }
        </View>

        <View style={styles.certificateContainer}>
          <Text style={styles.heading3}>My Certificate</Text>
          {
            certificateStatus.map((item) => {
              return (

                <View>
                  <View>
                    <Image style={styles.certificateImg} source={item.image} resizeMode='contain' />
                    <View style={styles.headerContainer}>
                      <Text style={styles.subheading1}>{item.name}</Text>
                      <View style={styles.descContainer}>
                        <Text style={styles.subheading3}>{item.publisher}</Text>
                        <Text style={styles.subheading3}>{item.date}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )
            })
          }
        </View>

      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 24,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillContainer: {
    paddingBottom: 10,
    paddingTop: 5,
  },
  certificateContainer: {
    flex: 1,
    marginTop: 10,
  },
  certificateImg: {
    width: 340,
    height: 220,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10
  },
  headerContainer: {
    maxHeight: 70,
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 5,
  },
  descContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading1: {
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 32,
  },
  heading2: {
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 26,
    paddingTop: 6
  },
  heading3: {
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 20,
  },
  subheading1: {
    color: 'black',
    fontWeight: 500,
    fontSize: 18,
    marginTop: 6
  },
  subheading2: {
    color: 'black',
    fontWeight: 'medium',
    fontSize: 16,
    marginTop: 6
  },
  subheading3: {
    color: 'black',
    fontWeight: 'light',
    fontSize: 14,
    marginTop: 3
  },
  subheading4: {
    marginTop: 6,
    marginBottom: 20,
    fontSize: 12,
    color: 'grey',
    paddingLeft: 5,

  },
  avatar: {
    width: '100%',
    height: 250,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 15
  },
})