import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default function home({ navigation }) {

    const data = [
        {
            id: 1,
            subheading1: 'Klinik Kita',
            subheading2: 'Web Design Project',
            img: require('../../assets/Project/Cover1.png'),
        },
        {
            id: 2,
            subheading1: 'Miracleye',
            subheading2: 'Web Design Project',
            img: require('../../assets/Project/Cover2.png')
        },
        {
            id: 3,
            subheading1: 'Festive',
            subheading2: 'Web Design Project',
            img: require('../../assets/Project/Cover3.png')
        },
        {
            id: 4,
            subheading1: 'JasainAja',
            subheading2: 'Web Design Project',
            img: require('../../assets/Project/Cover4.png')
        },
        {
            id: 5,
            subheading1: 'Reastate',
            subheading2: 'Web Design Project',
            img: require('../../assets/Project/Cover5.png')
        },
    ]

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.avatar} source={require('../../assets/profile/profil.png')} />
                <Text style={styles.heading1}>Mahesa bagus Raditya</Text>
                <Text style={styles.paragraph}> Hello!
                    I am Mahesa Bagus Raditya, and welcome to my Digital CV, Now I am a Student of SMK Telkom Purwokerto majoring in Software Engineering, I have several things that I am interested in, one of which is UI/UX and Programming, and my motto is I want to learn more and more about world of technology</Text>
                <Button
                    title='See More'
                    style={styles.button}
                    onPress={() => navigation.navigate('ProfileDetail')}
                    color='#0142A2'
                />
                <Text style={styles.heading2}>My Recents Project</Text>
                {
                    data.map((item) => {
                        return (
                            <View>
                                <View style={styles.projectContainer}>
                                    <Image style={styles.projectImg} source={item.img} />
                                    <View style={styles.descContainer}>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.subHeading1}>{item.subheading1}</Text>
                                            <Text style={styles.subHeading2}>{item.subheading2}</Text>
                                        </View>
                                        <TouchableOpacity style={styles.buttonContainer}>
                                            <Icon style={styles.icon} name="arrowright" size={20} color="#FFFFFF" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        paddingTop: 50,
        padding: 30,

    },
    projectContainer: {
        flex: 1,
        padding: 12,
    },
    descContainer: {
        flex: 1,
        maxHeight: 70,
        // maxWidth: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
        maxHeight: 120,
        maxWidth: 220,
    },
    buttonContainer: {
        justifyContent: 'center',
        backgroundColor: '#3498db',
        marginTop: 10,
        padding: 15,
        maxHeight: 60,
        maxWidth: 60,
        borderRadius: 200,
    },
    heading1: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        marginTop: 10,
        fontSize: 32,
    },
    heading2: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 26,
        paddingTop: 30
    },
    subHeading1: {
        color: 'black',
        textAlign: 'left',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 20,
        paddingTop: 10
    },
    subHeading2: {
        color: 'black',
        textAlign: 'left',
        fontWeight: 'semibold',
        justifyContent: 'center',
        fontSize: 16,
    },
    paragraph: {
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
        fontSize: 12,
        color: 'grey',
        justifyContent: 'center',
    },
    avatar: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 10,
        borderRadius: 10,
    },
    button: {
        borderRadius: 10,
    },
    projectImg: {
        width: 300,
        height: 160,
        alignSelf: 'center',
        borderRadius: 10
    },
    icon: {
        alignSelf: 'center',
    }

});