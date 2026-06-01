$files = Get-ChildItem -Path "c:\Users\91836\SOCIAL DADDY\SDMLS" -Filter "*.html" -Recurse | Where-Object { -not $_.FullName.Contains(".gemini") }
foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw
    $updated = $false
    
    if ($content -match "\+19712951676") {
        $content = $content -replace "\+19712951676", "+19058645825"
        $updated = $true
    }
    if ($content -match "\(971\) 295-1676") {
        $content = $content -replace "\(971\) 295-1676", "+1 (905) 864-5825"
        $updated = $true
    }
    
    if ($updated) {
        Set-Content $f.FullName -Value $content
    }
}
git add .
git commit -m "Update phone number to +1 (905) 864-5825"
git push
