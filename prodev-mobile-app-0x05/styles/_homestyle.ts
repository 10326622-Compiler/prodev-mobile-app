import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchGroup: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 56,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#7B7B7B",
  },
  searchControl: {
    height: 40,
  },
  searchButton: {
    backgroundColor: "#34967C",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 20,
    columnGap: 30,
    alignItems: "center",
    paddingVertical: 10,
  },
  filterContainer: {
    alignItems: "center",
    rowGap: 5,
    width: 60,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles };