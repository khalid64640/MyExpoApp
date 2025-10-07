import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from "react-native";
import GoalInput from "./Components/GoalInput";
import GoalItem from "./Components/GoalItem";

export default function InputWork() {
 
  const [courseGoals, setCourseGoals] = useState([]);


  function addHandler(text) {
    if (text.trim().length > 0) {
      setCourseGoals((courseGoals) => [...courseGoals, text]);
      setText("");
    } else {
      alert("مهرباني وکړی لیکنه داخله کړئ");
    }
  }

  function deleteHandler(indexToDelete) {
    setCourseGoals((courseGoals) =>
      courseGoals.filter((_, index) => index !== indexToDelete)
    );
    alert("ریکارډ مو په کامیابۍ سره ډیلیټ کړو !");
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal = {addHandler} />
      <View style={styles.goalContainer}>
        <Text style={styles.headerText}>List of the Course Goals:</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem onDelete = {deleteHandler} itemData = {itemData} />
            )
          }}

          keyExtractor={(item) => {
            item.id;
          }}

        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: 50,
    paddingHorizontal: 20,
  },


  goalText: {
    fontSize: 16,
    color: "#343a40",
  },
  textInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  goalContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#e9ecef",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },




});
