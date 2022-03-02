namespace Infrastructure.Photos;

public class ImageTransform
{
    public ImageTransform()
    {
    }

    public ImageTransform(int height, int width, CropMode crop)
    {
        Height = height;
        Width = width;
        Crop = crop;
    }

    public int Height { get; set; } = 800;
    public int Width { get; set; } = 600;
    public CropMode Crop { get; set; } = CropMode.fit;
    public string Gravity { get; set; } = "auto";
}

public enum CropMode
{
    fill,
    fit,
    lfill,
    fill_pad,
    crop,
    thumb
}