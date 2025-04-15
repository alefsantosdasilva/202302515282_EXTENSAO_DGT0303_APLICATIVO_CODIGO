import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        options={{ title: "Entrar", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="search"
        options={{
          title: "Entrar",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="about"
        options={{ title: "Sobre a loja", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="address"
        options={{ title: "Endereço de entrega", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="address_cep"
        options={{ title: "Endereço de entrega", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="detail_products_marmita"
        options={{
          title: "Detalhe do produto",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="detail_products_salada"
        options={{
          title: "Detalhe do produto",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="detail_products_refrigerante"
        options={{
          title: "Detalhe do produto",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="detail_products_agua"
        options={{
          title: "Detalhe do produto",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="detail_products_sucoCha"
        options={{
          title: "Detalhe do produto",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="carrinho"
        options={{ title: "Meus Pedidos", headerTitleAlign: "center" }}
      />
    </Stack>
  );
}
