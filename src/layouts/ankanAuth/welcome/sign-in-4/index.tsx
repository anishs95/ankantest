import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, SafeAreaView } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import LinearGradient from "react-native-linear-gradient";
import { SliderBox } from "react-native-image-slider-box";

import { Button, Text } from "@ui-kitten/components";

import { KeyboardAvoidingView } from "./extra/3rd-party";

export default ({ navigation }): React.ReactElement => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");

  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const [imagesdata, setImagesdata] = useState([]);
  useEffect(() => {
    fetch(
      "https://3glocgk9uk.execute-api.us-east-1.amazonaws.com/Prod/api/dummy/GetSliderValues"
    )
      .then((response) => response.json())
      .then((json) => setImagesdata(json))
      .catch((error) => console.error(error));
  }, [images]);

  var images = imagesdata.map(myFunction);

  function myFunction(value) {
    return value.imageUri;
  }

  const onSignInButtonPress = (): void => {
    navigation && navigation.navigate("Otp");
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ANKAN</Text>
      <Text appearance="hint" category="s1" style={styles.subTitle}>
        Enhancing & providing the comprehensive solutions in the construction
        industry and aromatic chemicals – flavour arena
      </Text>
      <View style={styles.container2}>
        <SliderBox
          images={images}
          sliderBoxHeight={200}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          ImageComponentStyle={{ borderRadius: 35, width: "97%", marginTop: 5 }}
          dotColor="#0095D9"
          inactiveDotColor="#90A4AE"
        />
      </View>
      <KeyboardAvoidingView>
        <View style={styles.bottomContainer}>
          <PhoneInput
            ref={phoneInput}
            defaultCode="IN"
            layout="first"
            textContainerStyle={{ height: 70 }}
            textInputProps={{
              selectionColor: "#111",
              keyboardType: "phone-pad",
            }}
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
          />

          <TouchableOpacity
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
            }}
          ></TouchableOpacity>

          <LinearGradient
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.5, y: 0.9 }}
            locations={[0, 0.5, 0.6]}
            colors={["#0095D9", "#8A2BE2"]}
            style={styles.linearGradient}
          >
            <Button
              style={styles.getOtpButton}
              appearance="ghost"
              status="control"
              size="giant"
              onPress={onSignInButtonPress}
            >
              Get OTP
            </Button>
          </LinearGradient>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  container2: {
    width: "100%",
    marginTop: 50,
    justifyContent: "center",
    height: 200,
    alignItems: "center",
  },
  title: {
    color: "#0095D9",
    fontWeight: "bold",
    marginTop: 8,
    padding: 16,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 54,
  },
  subTitle: {
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 12,
  },
  linearGradient: {
    margin: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
    // paddingLeft: 15,
    // paddingRight: 15,
    borderRadius: 65,
  },
  buttonText: {
    color: "#111",
  },
  getOtpButton: {
    width: "100%",
    borderRadius: 30,
    // marginTop: 30,
    // marginHorizontal: 26,
    // backgroundColor: "#ffa",
    justifyContent: "center",
  },
  bottomContainer: {
    alignItems: "center",
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 50,
  },
  viewCenter: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: "100%",
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    paddingHorizontal: 16,
  },
});
