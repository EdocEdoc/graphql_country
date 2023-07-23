import { Text, FlatList, TouchableOpacity } from "react-native";
import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "./api/Query";

export default function HomeScreen() {
  const { data, loading } = useQuery(CONTINENT_QUERY);

  const ContinentItem = ({ continent }) => {
    const { name, code } = continent;

    return (
      <TouchableOpacity>
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return <Text>Fetching data...</Text>;
  }

  return (
    <FlatList
      data={data.continents}
      renderItem={({ item }) => <ContinentItem continent={item} />}
      keyExtractor={(item, index) => index}
    />
  );
}
