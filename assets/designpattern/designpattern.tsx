import { StyleSheet } from 'react-native';

const designpattern = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    xxx: {
        width: 40,
        height: 40,
        backgroundColor: "blue",
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    separatorsideways: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: 10,
    },
      normal: {
        fontSize: 15,
        fontWeight: 'normal',
      },
    center: {
        alignItems: 'center',
        justifyContent: "center",
    },
    left: {
        marginLeft: 10,
    },
    incorporation: {
        fontSize: 15,
        fontWeight: 'normal',
        color: "grey",
    },
    logo: {
        fontSize: 100,
        fontWeight: 'normal',
        color: "white",
        textShadowColor: "#8f7e7e",
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 6,
    },
    separatorsmall: {
        marginVertical: 10,
        height: 0,
    },
    alignitems: {
        flexDirection: "row",
    },
    buttonprimary: {
        marginVertical: 10,
        height: 1,
        width: '80%',
    },
    appButtondefault: {
        alignSelf: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginRight: 10,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 2 },
    },
    appButtondefault2: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 2 },
      },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    servicedatacontainer: {
        marginLeft: 10,
    },
    appButtoncall: {
        alignSelf: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 20,
        backgroundColor: "orange",
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
    },
    appButtoncall1: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginVertical: 0,
        borderRadius: 20,
        backgroundColor: "orange",
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
    },
    appButtoncalloffline: {
        alignSelf: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 2 },
    },
    floatbuttonsearch: {
        borderRadius: 20,
        position: "absolute",
        left: 10,
        top: 10,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    imagerow: {
        flexDirection: "row",
    },
    offercontainer: {
        backgroundColor: "lightgrey",
        marginHorizontal: 10,
        height: 550,
        borderRadius: 20,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.40,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
    },
    offernavigationlength: {
        borderRadius: 20,
        width: 150,
        backgroundColor: 'rgba(0,0,0,0)',
    },

    scrollviewofferoptions: {
        backgroundColor: 'rgba(0,0,0,0)',
        borderRadius: 20,
    },
    offernavigationbackground: {
        backgroundColor: 'rgba(0,0,0,2)',
        position: "absolute",
        bottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 40,
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10,
    },
    input1: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
    },

    appButtonprime: {
        fontSize: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginLeft: 10,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        backgroundColor: "orange",
        shadowOffset: { width: 0, height: 2 },
    },
    alignitemsinitem: {
        flexDirection: "row",
    },
    horizontallist: {
        marginVertical: 5,
    },
    spacebetweenitems: {
        paddingRight: 10,
    },
    margins: {
        marginTop: 0,
    },
    uploadfield: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor:'orange',
        width: 130,
        height: 180,
        alignItems: 'center',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        marginLeft: 10,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 2 },
    },
    uploadtext: {
        fontSize: 15,
        marginTop: 10,
        fontWeight: 'normal',
        color: "orange",
    },
    visuals: {
        borderRadius: 20,
        backgroundColor: 'lightgrey',
        width: 130,
        height: 180,
        alignItems: 'center',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        marginLeft: 10,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
    },
    textprime: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "white",
    },
    neutralbutton: {
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 1,
    },
    input2: {
        marginLeft: 10,
        marginVertical: 5,
        paddingVertical: 10,
        borderWidth: 2,
        paddingHorizontal: 15,
        borderRadius: 20,
        borderColor: "orange",
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 2 },
    },
    floatbuttontexttitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
    },
    floatbuttontext: {
        fontSize: 15,
        fontWeight: 'normal',
        color: "white",
    },
    appButtonlink: {
        fontSize: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginLeft: 10,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 2 },
    },
    appButtonfeedback: {
        fontSize: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginLeft: 10,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 2 },
    },
    floatingprimebottom: {
        borderRadius: 20,
        position: "absolute",
        bottom: 10,
        left: "10%",
        right: "10%",
        backgroundColor: "orange",
        paddingVertical: 10,
        alignItems: 'center',
    },
});
  export {designpattern}
