import { StyleSheet } from 'react-native';
const designpattern = StyleSheet.create({
/**Page layout */
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
/**Text */
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    normal: {
        fontSize: 15,
        fontWeight: 'normal',
      },
    normaltextprimebutton: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "white",
    },
    titletextprimebutton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
    },
    logo: {
        fontSize: 80,
        fontWeight: 'normal',
        color: "white",
        textShadowColor: "#8f7e7e",
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 6,
        letterSpacing: 8,
    },
/**Separators */
    separator: {
        backgroundColor: 'rgba(0,0,0,0)',
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    separatorsmall: {
        backgroundColor: 'rgba(0,0,0,0)',
        marginVertical: 10,
        height: 0,
    },
    separatorhorizontal: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: 10,
    },
/**placing */
    center: {
        alignItems: 'center',
        justifyContent: "center",
    },
    left: {
        marginLeft: 10,
    },
    alignitems: {
        flexDirection: "row",
    },
    actionsugestor: {
        borderRadius: 20,
        position: "absolute",
        bottom: 10,
        left: "10%",
        right: "10%",
        backgroundColor: "blue",
        paddingVertical: 10,
    },
    searchplacing: {
        position: "absolute",
        left: 10,
        top: 10,
    },
/**buttons */
    buttonprimary: {
        height: 40,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
        borderRadius: 20,
        backgroundColor: "orange",
        justifyContent: "center",
    },
    buttonsecondary: {
        height: 40,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "orange",
        backgroundColor: "white",
        justifyContent: "center",
    },
    buttondefault: {
        height: 40,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
        borderRadius: 20,
        backgroundColor: "white",
        justifyContent: "center",
    },
/**Inputs */
    inputactionrequired: {
        height: 40,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "orange",
        backgroundColor: "white",
        justifyContent: "center",
    },
    inputstandard: {
        height: 40,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
        borderRadius: 20,
        backgroundColor: "white",
        justifyContent: "center",
    },
/**Images */
    image: {
        flex: 1,
        justifyContent: "center"
    },
/**Elements */
    /**Offernavigation */
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
    scrollviewofferoptions: {
        backgroundColor: 'rgba(0,0,0,0)',
        borderRadius: 20,
    },
    offernavigationlength: {
        borderRadius: 20,
        width: 150,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    /**Offercontainer */
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
    /**no groups */
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
    savedservicelist: {
        marginLeft: 10,
    },
});
  export {designpattern}
