import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as Input from './components/Input'
import { SettingsTab } from './components/SettingsTabs'
import * as FileInput from './components/Form/FileInput'
import { Select } from './components/Form/Select'
import { SelectItem } from './components/Form/Select/SelectItem'
import { TextArea } from './components/TextArea'
import { Button } from './components/Button'
export default function Home() {
  return (
    <>
      <h1 className="txt-zinc-900 text-3xl font-medium dark:text-zinc-100">
        Settings
      </h1>
      <SettingsTab />

      <div className="mt-6 flex flex-col ">
        <div className="flex flex-col items-start   justify-between gap-4 border-b border-zinc-200 pb-5  dark:border-zinc-700 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          {/* name input */}
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <div className=" flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Wicar" />
              </Input.Root>
              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                >
                  LastName
                </label>
                <Input.Root>
                  <Input.Control id="lastName" defaultValue="Pessoa" />
                </Input.Root>
              </div>
            </div>
            <div />
          </div>
          {/* email input */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control id="email" defaultValue="Wicarpp@gmail.com" />
            </Input.Root>
            <div />
          </div>
          {/* photo input */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile
              </span>
            </label>
            <div>
              <FileInput.Root className="flex  flex-col gap-5 lg:flex-row lg:items-start">
                <FileInput.ImgPreview />
                <FileInput.Trigger></FileInput.Trigger>
                <FileInput.Control accept="image/png, image/jpeg" />
              </FileInput.Root>
            </div>
            <div />
          </div>
          {/* role input */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="dev" />
            </Input.Root>
            <div />
          </div>
          {/* country input */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Country
            </label>
            <Select placeholder="select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
              <SelectItem value="mex" text="Mexico" />
            </Select>
            <div />
          </div>
          {/* timezone input */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Timezone
            </label>
            <Select placeholder="select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
            <div />
          </div>

          {/* bio input */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                </Select>
                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className=" rounded-md p-2 outline-none hover:bg-zinc-50 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                  >
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button
                    variant="ghost"
                    type="button"
                    className=" rounded-md p-2 outline-none hover:bg-zinc-50 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <TextArea defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development." />
            </div>
          </div>

          {/* Portfolio input */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portifolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work
              </span>
            </label>
            <FileInput.Root className="">
              <FileInput.Trigger></FileInput.Trigger>
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
