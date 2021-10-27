import React from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Button,
  CheckBox,
  Datepicker,
  Divider,
  Input,
  StyleService,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import { ImageOverlay } from "./extra/image-overlay.component";
import {
  ArrowForwardIconOutline,
  FacebookIcon,
  GoogleIcon,
  HeartIconFill,
  TwitterIcon,
} from "./extra/icons";
import LinearGradient from "react-native-linear-gradient";
import { KeyboardAvoidingView } from "./extra/3rd-party";

export default ({ navigation }): React.ReactElement => {
  const [firstName, setFirstName] = React.useState<string>();
  const [lastName, setLastName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [place, setPlace] = React.useState<string>();
  const [phno, setPhno] = React.useState<string>();

  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);

  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = (): void => {
    navigation && navigation.navigate("Otp");
  };

  const onSignInButtonPress = (): void => {
    if (
      firstName == null ||
      lastName == null ||
      email == null ||
      place == null
    ) {
      alert("Empty Fields");
    } else {
      fetch(
        "https://wlqvdegwrf.execute-api.ap-south-1.amazonaws.com/alpha/api/User/Register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlZHb3BpbmF0aCIsIm5iZiI6MTYyMzEzNjY1MSwiZXhwIjoxNjIzMjIzMDUxLCJpYXQiOjE2MjMxMzY2NTF9.fXmdUO49ayKRrc3zSBJbwaMetTOlMcRzoY4AC7U1Zxs",
          },
          body: JSON.stringify({
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            PhoneNumber: phno,
            City: place,
          }),
        }
      )
        .then((response) => response.json())
        .then((json) => {
          // console.log(json.movies);

          AsyncStorage.setItem(
            "activationId",
            JSON.stringify(json.activationId)
          );
          AsyncStorage.setItem("userId", JSON.stringify(json.userId));
          navigation && navigation.navigate("Otp");
          // console.log(JSON.stringify(json));
          // console.log("asasasasasasasa" + JSON.stringify(json.userId));

          // console.log("namvigated sucess");

          return json;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const renderCheckboxLabel = React.useCallback(
    (evaProps) => (
      <Text {...evaProps} style={styles.termsCheckBoxText}>
        By creating an account, I agree to the Ewa Terms of\nUse and Privacy
        Policy
      </Text>
    ),
    []
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageOverlay
        style={styles.headerContainer}
        source={require("./assets/reg.png")}
      >
        {/* <Button
          style={styles.evaButton}
          appearance="ghost"
          status="control"
          size="large"
          accessoryLeft={HeartIconFill}
        >
          EVA
        </Button>
        <View style={styles.signUpContainer}>
          <Text style={styles.signInLabel} category="h4" status="control">
            SIGN UP
          </Text>
          <Button
            style={styles.signInButton}
            appearance="ghost"
            status="control"
            size="giant"
            accessoryLeft={ArrowForwardIconOutline}
            onPress={onSignInButtonPress}
          >
            Sign In
          </Button>
        </View> */}
      </ImageOverlay>

      <Text style={styles.emailSignLabel}>Ankan Registration</Text>
      <View style={[styles.container, styles.formContainer]}>
        <Input
          placeholder="Smith"
          label="FIRST NAME"
          autoCapitalize="words"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Input
          style={styles.formInput}
          placeholder="Watsan"
          label="LAST NAME"
          autoCapitalize="words"
          value={lastName}
          onChangeText={setLastName}
        />

        <Input
          style={styles.formInput}
          placeholder="smith.watsan@gmail.com"
          label="EMAIL"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.formInput}
          placeholder="Ernakulam"
          label="PLACE"
          value={place}
          onChangeText={setPlace}
        />
        <Input
          style={styles.formInput}
          placeholder="9998889990"
          label="PHONE NUMBER"
          value={phno}
          onChangeText={setPhno}
        />
      </View>
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.5, y: 0.9 }}
        locations={[0, 0.5, 0.6]}
        colors={["#0095D9", "#8A2BE2"]}
        // style={styles.linearGradient}
        style={styles.signUpButton}
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
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-1",
  },
  headerContainer: {
    minHeight: 216,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 44,
    radius: 20,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },
  socialAuthContainer: {
    marginTop: 24,
  },
  getOtpButton: {
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    // marginTop: 30,
    // marginHorizontal: 26,
    // backgroundColor: "#ffa",
    justifyContent: "center",
  },
  linearGradient: {
    margin: 30,

    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "80%",
    // paddingLeft: 15,
    // paddingRight: 15,
    borderRadius: 65,
  },
  socialAuthButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialAuthHintText: {
    alignSelf: "center",
    marginBottom: 16,
  },
  formContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  evaButton: {
    maxWidth: 72,
    paddingHorizontal: 0,
  },
  signInLabel: {
    flex: 1,
  },
  signInButton: {
    flexDirection: "row-reverse",
    paddingHorizontal: 0,
    borderRadius: 30,
  },
  signUpButton: {
    marginVertical: 34,
    marginHorizontal: 26,
    borderRadius: 30,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  socialAuthIcon: {
    tintColor: "text-basic-color",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 52,
  },
  divider: {
    flex: 1,
  },
  orLabel: {
    marginHorizontal: 8,
  },
  emailSignLabel: {
    fontSize: 21,
    alignSelf: "center",
    marginTop: 8,
  },
  formInput: {
    marginTop: 16,
  },
  termsCheckBox: {
    marginTop: 20,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
  termsCheckBoxText: {
    fontSize: 11,
    lineHeight: 14,
    color: "text-hint-color",
    marginLeft: 10,
  },
});

{
  /* <View style={styles.socialAuthContainer}>
        <Text style={styles.socialAuthHintText}>
          Sign with a social account
        </Text>
        <View style={styles.socialAuthButtonsContainer}>
          <Button
            appearance="ghost"
            size="giant"
            status="basic"
            accessoryLeft={GoogleIcon}
          />
          <Button
            appearance="ghost"
            size="giant"
            status="basic"
            accessoryLeft={FacebookIcon}
          />
          <Button
            appearance="ghost"
            size="giant"
            status="basic"
            accessoryLeft={TwitterIcon}
          />
        </View>
      </View> */
}
{
  /* <View style={styles.orContainer}>
        <Divider style={styles.divider} />
        <Text style={styles.orLabel} category="h5">
          OR
        </Text>
        <Divider style={styles.divider} />
      </View> */
}

{
  /* <Button
        style={styles.signUpButton}
        size="large"
        onPress={onSignUpButtonPress}
      >
        SIGN UP
      </Button> */
}

{
  /* <Input
          style={styles.formInput}
          label="PASSWORD"
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        /> */
}
{
  /* <CheckBox
          style={styles.termsCheckBox}
          checked={termsAccepted}
          onChange={(checked: boolean) => setTermsAccepted(checked)}
        >
          {renderCheckboxLabel} */
}
{
  /* </CheckBox> */
}

{
  /* <Datepicker
          style={styles.formInput}
          placeholder="18/10/1995"
          label="Date of Birth"
          date={dob}
          onSelect={setDob}
        /> */
}
