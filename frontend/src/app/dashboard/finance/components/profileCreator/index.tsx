import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    CreateCryptoProfileInput,
    CreateCryptoProfileMutation,
    MutationCreateCryptoProfileArgs,
} from "@/gql/graphql";
import { useMutation } from "@apollo/client";
import { CREATE_CRYPTO_PROFILE } from "@/api/crypto";
import { useAppSelector } from "@/state/hooks";
import ButtonWithLoading from "@/components/ui/button-with-loading";

interface IProps {
    refresh: () => void;
}

const createCryptoProfileSchema = z.object({
    apiKey: z.string().min(1, "Please enter your API key"),
    secretKey: z.string().min(1, "Please enter your Secret key"),
});

export default function ProfileCreator({ refresh }: IProps) {
    const {
        state: { user },
    } = useAppSelector((state) => state.auth);
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const form = useForm<CreateCryptoProfileInput>({
        resolver: zodResolver(createCryptoProfileSchema),
    });
    const { setError } = form;
    const [createProfile] = useMutation<
        CreateCryptoProfileMutation,
        MutationCreateCryptoProfileArgs
    >(CREATE_CRYPTO_PROFILE);

    async function onSubmit(createProfileDto: CreateCryptoProfileInput) {
        try {
            if (!user) return;
            setLoading(true);

            // TODO: check to connect to binance successfully
            // const client = new MainClient({
            //     api_key: createProfileDto.apiKey,
            //     api_secret: createProfileDto.secretKey
            // })
            // // const client = Binance({
            // //     apiKey: createProfileDto.apiKey,
            // //     apiSecret: createProfileDto.secretKey
            // // })
            // const data = await client.getAccountTradeList()
            // console.log({data})
            // const res = await login({ variables: { data: loginDto }});
            // if (!res.data) throw new Error("Login failed.");
            //
            // dispatch(authActions.loginWithPassword(loginDto));
            //
            // router.push(DASHBOARD_ROUTE.value)
            await createProfile({
                variables: {
                    data: {
                        ...createProfileDto,
                        userId: Number(user.id),
                    },
                },
            });
            setOpenDialog(false);
            refresh();
        } catch (error) {
            setError("apiKey", { message: "Cannot connect to your API" });
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setOpenDialog(true)}
                >
                    <Plus className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Crypto Profile</DialogTitle>
                    <DialogDescription className="flex items-center">
                        How get API keys?
                        <Button asChild variant="link">
                            <a
                                target="_blank"
                                href={
                                    "https://www.binance.com/en/support/faq/how-to-create-api-keys-on-binance-360002502072"
                                }
                            >
                                binance
                            </a>
                        </Button>
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="apiKey"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>API Key</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="secretKey"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Secret Key</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <ButtonWithLoading type="submit" loading={loading}>
                                Add
                            </ButtonWithLoading>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
