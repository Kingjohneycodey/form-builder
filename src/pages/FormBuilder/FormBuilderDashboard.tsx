import { BsFileEarmarkPlus } from "react-icons/bs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/DialogComponent";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/FormComponent";
import { Input } from "../../components/InputComponent";
import { Button } from "../../components/ButtonComponent";
import { Textarea } from "../../components/TextAreaComponent";
import FormCard from "../../components/FormCard";

const FormBuilderDashboard = () => {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Form name must be at least 2 characters.",
    }),
    description: z.string().min(5, {
      message: "Form description must be at least 5 characters",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="p-5">
      <div>
        <h1 className="mb-4 text-3xl font-bold">Form Builder</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <div className="p-4 text-center text-white rounded-tl-lg rounded-tr-lg bg-dark-green">
              <p className="text-base">Total Forms</p>
            </div>
            <div className="p-4 text-center text-white rounded-bl-lg rounded-br-lg bg-light-green">
              <h2 className="mb-2 text-2xl font-bold">10</h2>
            </div>
          </div>

          <div>
            <div className="p-4 text-center text-white rounded-tl-lg rounded-tr-lg bg-dark-green">
              <p className="text-base">Published Forms</p>
            </div>
            <div className="p-4 text-center text-white rounded-bl-lg rounded-br-lg bg-light-green">
              <h2 className="mb-2 text-2xl font-bold">10</h2>
            </div>
          </div>

          <div>
            <div className="p-4 text-center text-white rounded-tl-lg rounded-tr-lg bg-dark-green">
              <p className="text-base">Drafts</p>
            </div>
            <div className="p-4 text-center text-white rounded-bl-lg rounded-br-lg bg-light-green">
              <h2 className="mb-2 text-2xl font-bold">10</h2>
            </div>
          </div>

          <div></div>
        </div>

        <div className="my-8 border-t border-gray-400"></div>

        <h1 className="mb-4 text-3xl font-bold">Your forms</h1>

        <div className="my-8 border-t border-gray-400"></div>

        <div className="flex flex-wrap items-center justify-start gap-6">
          <Dialog>
            <DialogTrigger className="w-[23.5%] bg-white px-6 group border border-primary/20 h-[190px] items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer border-dashed gap-4 rounded-lg">
              <BsFileEarmarkPlus className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
              <p className="text-xl font-bold text-muted-foreground group-hover:text-primary">
                Create new form
              </p>
            </DialogTrigger>
            <DialogContent className="bg-white">
              <DialogHeader className="gap-0">
                <DialogTitle className="text-xl font-bold">
                  Create Form
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  Create a new form to start collecting responses
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter the form name" {...field} />
                        </FormControl>
                        <FormMessage className="text-color-bright-red" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">
                          Description
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter the form description"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-color-bright-red" />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
          <FormCard
            formName={"Enrollment Form"}
            formStatus={"Draft"}
            dateCreated={"1 day ago"}
            formDescription={`
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.`}
          />
          <FormCard
            formName={"Staff Form"}
            formStatus={"Draft"}
            dateCreated={"5 days ago"}
            formDescription={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.`}
          />
          <FormCard
            formName={"Registration Form"}
            formStatus={"Published"}
            dateCreated={"10 days ago"}
            formDescription={`
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.`}
          />
          <FormCard
            formName={"Export Form"}
            formStatus={"Published"}
            dateCreated={"15 days ago"}
            formDescription={`
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.`}
          />
        </div>
      </div>
    </div>
  );
};

export default FormBuilderDashboard;
