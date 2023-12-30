import Button from "@/components/Button";
import Card from "@/components/Card";
import { CloseIcon, LocationIcon } from "@/components/icons";
import LocationInput, {
  type Location,
  formatLocation,
} from "@/components/inputs/Location";
import Popover from "@/components/Popover";

function LocationButton({
  latitude,
  longitude,
}: {
  latitude?: number | null;
  longitude?: number | null;
}) {
  const hasLocation = latitude != null && longitude != null;
  return (
    <Button mode="text" variant="secondary" padding="py-1">
      <LocationIcon className="inline-block mr-1 w-5 h-5 text-stone-500" />
      {hasLocation ? (
        formatLocation({ latitude, longitude })
      ) : (
        <span className="text-sm text-stone-400 dark:text-stone-600">
          No location
        </span>
      )}
    </Button>
  );
}

export default function RecordingLocation({
  latitude,
  longitude,
  onChange,
}: {
  latitude?: number | null;
  longitude?: number | null;
  onChange?: (value: Location) => void;
}) {
  return (
    <Popover
      button={<LocationButton latitude={latitude} longitude={longitude} />}
    >
      {() => (
        <Card className="bg-stone-800">
          <LocationInput value={{ latitude, longitude }} onChange={onChange} />
          <Button
            mode="text"
            variant="danger"
            onClick={() => onChange?.({ latitude: null, longitude: null })}
          >
            <CloseIcon className="inline-block mr-1 w-5 h-5" />
            Clear
          </Button>
        </Card>
      )}
    </Popover>
  );
}