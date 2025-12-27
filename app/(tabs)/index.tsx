import SearchBar from "@/components/SearchBar";
import { Link, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">

      <ScrollView className='flex-1 px-5'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{minHeight: '100%', paddingBottom: 10}}
      >

        <View className="flex-1 mt-20">
          <SearchBar 
          onPress={() => router.push("/search")}
          placeholder='Search for a movie'
          />
        </View>
      </ScrollView>
    </View>
  );
}
