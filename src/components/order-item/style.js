import { StyleSheet } from "react-native";
import { COLORS } from "../../constans/themes/colors";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderBottomColor: COLORS.primaryDark,
        borderBottomWidth: 1,
        backgroundColor: COLORS.primary,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.41,
        elevation: 5,
        justifyContent: 'center',
    },
    headerContainer: {

    },
    date: {

    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    content: {

    },
    total: {
        fontSize: 16,
        fontFamily: 'Lato-Bold',
    },
})