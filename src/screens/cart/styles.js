import { StyleSheet } from "react-native";
import { COLORS } from "../../constans/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    footer: {
        backgroundColor: COLORS.white,
        borderTopWidth: 1,
        borderTopColor: COLORS.primaryDark,
        paddingVertical: 10,
        marginHorizontal: 10,
        marginBottom: 10,

    },
    buttonConfirm: {
        backgroundColor: COLORS.primaryDark,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonDisabled : {
        backgroundColor: COLORS.gray,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textButtonConfirm: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
    },
    totalContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleTotal: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
    },
    textTotal: {
        fontSize: 16,
        fontFamily: 'Lato-Bold',
    },
})