import { StyleSheet } from "react-native";
import { COLORS } from "../../constans/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 125,
        backgroundColor: COLORS.backgroundLight,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.backgroundDark,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.41,
        elevation: 5,
        margin: 5,

    },
    headerContainer: {
        
    },
    header: {
        fontSize: 16,
        fontFamily: 'Lato-Bold',
        color: COLORS.text,
        marginBottom: 5,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        flex: 1,

    },
    quantity: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: COLORS.text,
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontFamily: 'Lato-Italic',
        color: COLORS.text,
        marginVertical: 10,
    },
})