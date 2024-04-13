import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import colors from '../../components/colors';  
import globalStyles from '../../components/GlobalStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CreatePost = () => {
    const [defaultRating, setDefaultRating] = useState(0);
    const [maxRating] = useState([1, 2, 3, 4, 5]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [review, setReview] = useState("");

    const tags = ['Vegan', 'Vegetarian', 'Gluten Free', 'Wheelchair Ramp'];

    const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true';
    const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true';

    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle} accessible accessibilityLabel="Rating Bar">
                {maxRating.map((item) => (
                    <TouchableOpacity 
                        activeOpacity={0.7}
                        key={item}
                        onPress={() => setDefaultRating(item)}
                        style={styles.starButton}
                        accessible
                        accessibilityRole="button"
                        accessibilityLabel={`Rate ${item} stars`}
                    >
                        <Image
                            style={styles.starImgStyle}
                            source={{ uri: item <= defaultRating ? starImgFilled : starImgCorner }}
                            accessible
                            accessibilityLabel={item <= defaultRating ? "Filled Star" : "Empty Star"}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea} accessible accessibilityLabel="Create Post Screen" accessibilityRole="adjustable">
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"} 
                style={styles.keyboardAvoidingView}
                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
            >
                <ScrollView 
                    contentContainerStyle={styles.scrollViewStyle}
                    keyboardShouldPersistTaps='handled'
                    accessible
                    accessibilityLabel="Scrollable area for creating a post"
                >
                    <View style={styles.contentContainer}>
                        <Text style={globalStyles.headerText}>Upload Image</Text>
                        <TouchableOpacity style={styles.iconButton} accessible accessibilityRole="button" accessibilityLabel="Take photo" accessibilityHint="Opens the camera to take a photo">
                            <MaterialCommunityIcons name="camera-plus" size={40} color={colors.accentSecondary} />
                        </TouchableOpacity>
                        <Text style={globalStyles.headerText}>Add Rating</Text>
                        <CustomRatingBar />
                        <Text style={[globalStyles.infoText, styles.ratingText]}>
                            {`${defaultRating} / ${maxRating.length}`}
                        </Text>
                        <Text style={globalStyles.headerText}>Write Review</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            onChangeText={setReview}
                            value={review}
                            placeholder="Type your review here..."
                            multiline
                            numberOfLines={4}
                            accessible
                            accessibilityLabel="Review Text Input"
                            accessibilityHint="Type your review for the restaurant here"
                        />
                        <Text style={globalStyles.headerText}>Add Tags</Text>
                        <View style={styles.tagsContainer} accessible accessibilityLabel="Tag selection">
                            {tags.map((tag) => (
                                <TouchableOpacity
                                    key={tag}
                                    style={[styles.tagButton, selectedTags.includes(tag) ? styles.tagButtonSelected : {}]}
                                    onPress={() => toggleTag(tag)}
                                    accessible
                                    accessibilityRole="button"
                                    accessibilityLabel={`${selectedTags.includes(tag) ? "Remove tag" : "Add tag"} ${tag}`}
                                >
                                    <Text style={styles.tagButtonText}>{tag}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <TouchableOpacity style={globalStyles.Button} accessible accessibilityRole="button" accessibilityLabel="Create post" accessibilityHint="Creates the post with the entered information">
                            <Text style={globalStyles.ButtonText}>Create Post</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollViewStyle: {
        flexGrow: 1,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    customRatingBarStyle: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    starButton: {
        padding: 10,
    },
    starImgStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },
    iconButton: {
        marginBottom: 20,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 20,
    },
    tagButton: {
        backgroundColor: colors.accentSecondary,
        padding: 10,
        margin: 5,
        borderRadius: 20,
    },
    tagButtonSelected: {
        backgroundColor: colors.accentPrimary,
    },
    tagButtonText: {
        color: 'white',
        fontFamily: 'Poppins',
    },
    ratingText: {
        marginBottom: 20,
    },
    textInputStyle: {
        height: 100,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        textAlignVertical: 'top',
        color: 'black',
        fontFamily: 'Poppins',
    },
});

export default CreatePost;
