import { FormData } from '@/lib/schema';
import { Heading, Tailwind, Text } from '@react-email/components'

export const EmailTemplate: React.FC<Readonly<FormData>> = ({
  name,
  email,
  body,
}) => {

  return (
    <Tailwind>
      <Heading>Welcome, {name}!</Heading>
      <Text>thank you contact us</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{body}</Text>
    </Tailwind>
  );
}