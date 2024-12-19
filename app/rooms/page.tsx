import useSWR from 'swr';
    import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    export default function RoomsPage() {
      const { data, error } = useSWR('/api/hotels', fetcher);

      if (error) return <div>Failed to load</div>;
      if (!data) return <div>Loading...</div>;

      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Available Hotels</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((hotelGroup: any) => (
              <Card key={hotelGroup._id}>
                <CardHeader>
                  <CardTitle>{hotelGroup.showName}</CardTitle>
                </CardHeader>
                <CardContent>
                  {hotelGroup.Hotels.map((hotel: any) => (
                    <div key={hotel["Hotel Name"]}>
                      <h2>{hotel["Hotel Name"]}</h2>
                      <p>{hotel.Stars} Stars</p>
                      <p>Price: ${hotel["Nightly Rate"]}</p>
                      <p>Distance: {hotel.Distance}</p>
                      <p>Address: {hotel.Address}</p>
                      <p>Amenities: {Object.entries(hotel.Amenities).filter(([key, value]) => value).map(([key, value]) => key).join(', ')}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );
    }
