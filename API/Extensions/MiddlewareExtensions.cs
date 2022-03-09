using API.Middleware;

namespace API.Extensions;

public static class MiddlewareExtensions
{
    public static WebApplication AddMiddlewaresConfig(this WebApplication app)
    {
        app.UseMiddleware<ExceptionMiddleware>();
        // app.UseXContentTypeOptions();
        // app.UseReferrerPolicy(opt => opt.NoReferrer());
        // app.UseXXssProtection(opt => opt.EnabledWithBlockMode());
        // app.UseXfo(opt => opt.Deny());
        // app.UseCsp(opt => opt
        //     .BlockAllMixedContent()
        //     .StyleSources(s => s.Self().CustomSources(
        //         "https://fonts.googleapis.com",
        //         "sha256-/epqQuRElKW1Z83z1Sg8Bs2MKi99Nrq41Z3fnS2Nrgk=",
        //         "sha256-2aahydUs+he2AO0g7YZuG67RGvfE9VXGbycVgIwMnBI=",
        //         "sha256-+oGcdj5BhO6SoiIGYIkPOMYi7d2h2Pp/bkJLBfYL+kk="
        //     ))
        //     .FontSources(s => s.Self().CustomSources(
        //         "https://fonts.gstatic.com", "data:"
        //     ))
        //     .FormActions(s => s.Self())
        //     .FrameAncestors(s => s.Self())
        //     .ImageSources(s => s.Self().CustomSources(
        //         "https://res.cloudinary.com",
        //         "https://www.facebook.com",
        //         "https://platform-lookaside.fbsbx.com",
        //         "data:"
        //     ))
        //     .ScriptSources(s => s.Self()
        //         .CustomSources(
        //             "sha256-HIgflxNtM43xg36bBIUoPTUuo+CXZ319LsTVRtsZ/VU=",
        //             "https://connect.facebook.net",
        //             "sha256-3x3EykMfFJtFd84iFKuZG0MoGAo5XdRfl3rq3r//ydA="
        //         ))
        // );
        return app;
    }
}