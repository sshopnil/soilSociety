import { useNavigation, useRoute } from "@react-navigation/native"
import { View, Text, Image, SafeAreaView } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

const TipInfo = [
    {
      "tipId": 1,
      "tipTitle": "1st Title",
      "tipDetail": "short detail. short detail. short detail. short detail",
      "imgURL": "https://th.bing.com/th/id/R.e1831c82039795788181eed7d87909f7?rik=7l4wuGS2svROlA&pid=ImgRaw&r=0",
    },
  
    {
      "tipId": 2,
      "tipTitle": "2st Title",
      "tipDetail": "short detail. short detail. short detail. short detail",
      "imgURL": "https://th.bing.com/th/id/R.e1831c82039795788181eed7d87909f7?rik=7l4wuGS2svROlA&pid=ImgRaw&r=0",
    }
  ]

const TipsDetails = () =>{
    const parameters = useRoute().params
    const navigation = useNavigation()
    const thisItem = TipInfo.find((item) => item.tipId == parameters.id)

    return(
        <View>
            <Text>Tip's Detail</Text>
            <View>
                <SafeAreaView>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <Image source={{uri: thisItem?.imgURL}}/>
                        </View>
                        <Text>{thisItem?.tipTitle}</Text>
                        <View>
                            <Text>
                                {thisItem?.tipDetail}
                            </Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    )
}
export default TipsDetails