import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false)
  const [remember, setRemember] = useState(false);

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Login</Text>
      <View style={styles.underline} />

      
      <TextInput
        style={styles.input}
        placeholder="name"
        value={name}
        onChangeText={setName}
      />

      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry= {!show}
        value={password}
        onChangeText={setPassword}
      />

      
      <View style={styles.setRow}>


        <TouchableOpacity
          style={styles.setRowME}
          onPress={() => setRemember(!remember)}
        >
          <View style={styles.checkbox}>
            {remember && <View style={styles.checkboxInner} />}
          </View>
          <Text style={styles.rememberText}>remember me</Text>
        </TouchableOpacity>

        
        
        
        <TouchableOpacity
          style={styles.setRow}
          onPress={() => setShow(!show)}
        >
          <View style={styles.checkbox}>
            {show && <View style={styles.checkboxInner} />}
          </View>
          <Text style={styles.rememberText}>Show Password</Text>
        </TouchableOpacity>


      </View>



      
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelBtn}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 6,
  },

  underline: {
    width: 110,
    height: 3,
    backgroundColor: "black",
    alignSelf: "center",
    marginBottom: 38,
  },

  input: {
    borderWidth:2,
    borderColor: "#000",
    padding: 12,
    fontSize: 20,
    borderRadius: 8,
    marginBottom: 20,
  },

  setRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },

  setRowME: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginInline:23,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: "#000",
  },

  rememberText: {
    fontSize: 18,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  loginBtn: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 6,
  },

  loginText: {
    color: "#fff",
    fontSize: 18,
  },

  cancelBtn: {
    borderWidth: 2,
    borderColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 6,
  },

  cancelText: {
    color: "#000",
    fontSize: 18,
  },
});
