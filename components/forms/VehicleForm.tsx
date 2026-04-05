'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Info, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Vehicle name must be at least 2 characters.' }),
  type: z.string().min(1, { message: 'Please select a vehicle type.' }),
  price: z.coerce.number().min(1, { message: 'Price must be greater than 0.' }),
  image: z.string().url({ message: 'Please enter a valid image URL.' }),
  available: z.boolean().default(true),
  description: z.string().min(10, { message: 'Description must be at least 10 characters.' }),
});

export const VehicleForm = () => {
  const [success, setSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      type: 'Car',
      price: 0,
      image: '',
      available: true,
      description: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    form.reset();
  };

  return (
    <Card className="border-[#e5e7eb] rounded-[2rem] shadow-lg overflow-hidden bg-white">
      <CardHeader className="bg-[#f8fafc] border-b border-[#f1f5f9] p-8">
        <div className="flex items-center gap-3 text-[#6366f1] mb-2 font-bold tracking-wider text-xs uppercase">
          <Plus className="w-4 h-4" />
          Quick Add
        </div>
        <CardTitle className="text-3xl font-black text-[#0f172a]">List Your Vehicle</CardTitle>
        <CardDescription className="text-base text-[#64748b]">
          Fill in the details below to add a new vehicle to the VRent marketplace.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold text-[#0f172a]">Vehicle Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Tesla Model 3" {...field} className="h-12 rounded-xl border-[#e5e7eb] focus-visible:ring-[#6366f1]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold text-[#0f172a]">Type</FormLabel>
                    <FormControl>
                      <select {...field} className="flex h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="Car">Car</option>
                        <option value="Bike">Bike</option>
                        <option value="Van">Van</option>
                        <option value="Scooter">Scooter</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold text-[#0f172a]">Price per day ($)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} className="h-12 rounded-xl border-[#e5e7eb] focus-visible:ring-[#6366f1]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold text-[#0f172a]">Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://unsplash.com/..." {...field} className="h-12 rounded-xl border-[#e5e7eb] focus-visible:ring-[#6366f1]" />
                    </FormControl>
                    <FormDescription className="text-xs">Provide a high-quality photo URL for the vehicle.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="text-sm font-bold text-[#0f172a]">Description</FormLabel>
                  <FormControl>
                    <textarea 
                      {...field} 
                      className="flex min-h-[120px] w-full rounded-xl border border-[#e5e7eb] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about the vehicle, its features, and condition..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="available"
              render={({ field }: { field: any }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0 p-4 rounded-xl border border-[#e5e7eb] bg-[#f8fafc]/50">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="h-6 w-6 rounded border-[#e5e7eb] data-[state=checked]:bg-[#6366f1]"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-bold text-[#0f172a]">Set as Available</FormLabel>
                    <FormDescription className="text-xs">
                      Make this vehicle instantly discoverable by customers.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <div className="pt-4">
              <Button 
                type="submit" 
                size="lg" 
                className={`w-full h-16 rounded-2xl text-lg font-bold transition-all duration-300 ${
                  success ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-[#0f172a] hover:bg-[#0f172a]/90'
                }`}
              >
                {success ? 'Success! Vehicle Added (Mock)' : 'List Vehicle Now'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
