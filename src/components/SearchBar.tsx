import { Button, Group, Kbd, TextInput } from "@mantine/core"
import { FunctionComponent, useRef } from "react"
import { IconSearch } from "@tabler/icons-react"
import { useHotkeys } from "@mantine/hooks"
import { useForm } from "@mantine/form"

type SearchBarForm = {
  searchQuery: string
}

const SearchBar: FunctionComponent = () => {
  const ref = useRef<HTMLInputElement>(null)

  useHotkeys([
    ["/", () => { ref.current?.focus() }]
  ])

  const form = useForm<SearchBarForm>({
    initialValues: {
      searchQuery: ""
    }
  })

  const handleSubmit = (values: SearchBarForm) => {
    console.log(values)
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Group spacing={"xs"}>
        <TextInput
          style={{ flex: 1 }}
          ref={ref}
          placeholder="Search..."
          icon={<IconSearch size={"1rem"}/>}
          aria-label="Search"
          rightSection={<Kbd>/</Kbd>}
          {...form.getInputProps("searchQuery")}
        />
        <Button type="submit">
          Search!
        </Button>
      </Group>
    </form>
  )
}

export default SearchBar
